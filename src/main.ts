/**
************************************************************

  kintone + TailwindCSS コラボテスト
  メインスクリプト

************************************************************
 */

/** インポート */
import { createApp } from 'vue'
import App from './App.vue'

import { createClient, getFormFields } from '@/functions/kintone'

/** マウントターゲット */
const MOUNT_TARGET = 'container'

/**
 * ========================================
 * kintone イベント処理
 * ========================================
 */

/**
 * --------------------
 * レコード一覧画面
 * --------------------
 */
kintone.events.on('app.record.index.show', async (event: kintone.Event) => {
  console.log(event)
  if (event.viewType !== 'custom' && event.viewName !== 'tailwindcss') {
    // カスタマイズビューでなければ終了する
    return event
  }

  // アプリのフィールド構成を取得する
  const appId = kintone.app.getId()
  if (!appId) return event
  const client = createClient()
  const fieldInfo = await getFormFields({ appId, client })
  console.log('フィールド情報')
  console.log(fieldInfo.properties)

  // レコードの配列（本来は REST API Client で取得する）
  const records = event.records

  // マウントターゲットが存在すればマウントを実行する
  const mountTarget = document.getElementById(MOUNT_TARGET)
  if (mountTarget) {
    createApp(App, { fieldInfo, records }).mount(mountTarget)
  }
})
