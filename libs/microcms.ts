import {
  createClient,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { notFound } from "next/navigation";

// 環境変数に MICROCMS_SERVICE_DOMAIN が設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数に MICROCMS_API_KEY が設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Client SDK の初期化を行う
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// リンクの型定義
export type Link = {
  fieldID: string;
  name: string;
  url: string;
};

// 実績の型定義
export type Work = {
  title: string;
  eyecatch: MicroCMSImage;
  category?: Category[];
  tech_stack?: string[];
  links?: Link[];
  overview: string;
  content: string;
};

export type WorkArticle = Work & MicroCMSContentId & MicroCMSDate;

// 実績一覧を取得
export const getWorkList = async (queries?: MicroCMSQueries) => {
  const workListData = await client
    .getList<Work>({
      endpoint: "work",
      queries,
    })
    .catch(notFound);
  return workListData;
};

// 実績の詳細を取得
export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const workDetailData = await client
    .getListDetail<Work>({
      endpoint: "work",
      contentId,
      queries,
    })
    .catch(notFound);
  return workDetailData;
};

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listCategoryData = await client
    .getList<Category>({
      endpoint: "categories",
      queries,
    })
    .catch(notFound);
  return listCategoryData;
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailCategoryData = await client
    .getListDetail<Category>({
      endpoint: "categories",
      contentId,
      queries,
    })
    .catch(notFound);
  return detailCategoryData;
};
