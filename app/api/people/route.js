// app/api/people/route.js
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

async function getDataSourceId(databaseId) {
  const db = await notion.databases.retrieve({
    database_id: databaseId,
  });
  const ds = db.data_sources;
  if (!ds || ds.length === 0) {
    throw new Error("No data_sources found for this database");
  }
  return ds[0].id;
}

export async function GET() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const dataSourceId = await getDataSourceId(databaseId);

    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      page_size: 100,
    });

    const people = response.results.map((page) => {
      const props = page.properties;

      // Имя
      const name = props.Name?.title?.[0]?.text?.content || "";

      // Короткое описание
      const description =
        props.Description?.rich_text?.map((rt) => rt.plain_text).join("") || "";

      // Полное описание
      const fullDescription =
        props.Full?.rich_text?.map((rt) => rt.plain_text).join("") || "";

      // Фото
      let photos = [];
      if (props.Photos?.files && Array.isArray(props.Photos.files)) {
        photos = props.Photos.files
          .map((f) => {
            if (f.type === "file") return f.file.url;
            if (f.type === "external") return f.external.url;
            return null;
          })
          .filter(Boolean);
      }

      // Контакты
      // console.log(props);
      let contacts = [];
      if (props.Telegram?.url) {
        contacts.push({
          label: "Telegram",
          href: props.Telegram.url,
        });
      }
      if (props.Instagram?.url) {
        contacts.push({
          label: "Instagram",
          href: props.Instagram.url,
        });
      }
      if (props.LinkedIn?.url) {
        contacts.push({
          label: "LinkedIn",
          href: props.LinkedIn.url,
        });
      }
      if (props["Contact Email"]?.email) {
        contacts.push({
          label: "Email",
          href: `mailto:${props["Contact Email"].email}`,
        });
      }

      return {
        id: page.id,
        name,
        description,
        fullDescription,
        photos,
        contacts,
      };
    });

    return NextResponse.json(people);
  } catch (err) {
    console.error("Error fetching from Notion:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
