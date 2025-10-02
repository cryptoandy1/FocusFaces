import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN, // положим токен в .env
});

export const databaseId = process.env.NOTION_DATABASE_ID;
