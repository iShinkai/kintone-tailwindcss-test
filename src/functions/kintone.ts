import { KintoneRestAPIClient } from '@kintone/rest-api-client'

/**
 * 指定の内容で REST API Client を作成して返却する
 * @param params パラメータ
 * @param params.baseUrl ベースURL
 * @param params.apiToken APIトークン
 */
const createClient = (params?: { baseUrl?: string; token?: string }) => {
  const client = new KintoneRestAPIClient(
    params
      ? {
          baseUrl: params.baseUrl,
          auth: { apiToken: params.token },
        }
      : {}
  )

  return client
}

/**
 * 指定のアプリのフィールド構成を取得する
 * @param params パラメータ
 * @param params.client REST API クライアント
 * @param params.appId アプリID
 */
const getFormFields = async (params: {
  client: KintoneRestAPIClient
  appId: number
}) => {
  console.log(`アプリID ${params.appId} のフィールド構成を取得します`)

  // 受け取った client と appId でフィールド構成を取得する
  try {
    const fieldInfo = await params.client.app.getFormFields({
      app: params.appId,
    })
    console.log(fieldInfo.properties)
    return fieldInfo.properties
  } catch (e) {
    console.log('フィールド構成を取得できませんでした！')
    console.error(e)
  }
  return {}
}

export { createClient, getFormFields }
