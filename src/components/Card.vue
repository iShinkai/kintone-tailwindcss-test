<!--
######################################################################
  kintone + TailwindCSS コラボテスト
  Card コンポーネント
    List コンポーネントに配置され、個々のレコードの内容を表示する
######################################################################
-->

<!--
============================================================
  スクリプト
============================================================
-->
<script setup lang="ts">
/**
 * - - - - - - - - - - - - - - - - - - - -
 * インポート
 * - - - - - - - - - - - - - - - - - - - -
 */
import { computed, PropType } from 'vue'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

/** dayjs のセットアップ */
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

/**
 * - - - - - - - - - - - - - - - - - - - -
 * プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */
const props = defineProps({
  record: {
    type: Object as PropType<KintoneTypes.Record>,
  },
})

/**
 * - - - - - - - - - - - - - - - - - - - -
 * 算出プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */

/** 顧客名 */
const customer = computed(() => props.record?.Customer.value)

/** 問い合わせ種別 */
const qType = computed(() => props.record?.QType.value)

/** 問い合わせ種別のクラス */
const qTypeClasses = computed(() => {
  const obj = QTYPE_CLASSES.find((obj) => obj.label === qType.value)
  if (obj) return obj.classes
  return ['bg-slate-300']
})

/** 詳細 */
const detail = computed(() => props.record?.Detail.value)

/** 受付日時 */
const received = computed(() =>
  dayjs(props.record?.ReceptionDate.value || 0)
    .tz()
    .format('YYYY/MM/DD')
)

/** 対応期限 */
const limit = computed(() =>
  dayjs(props.record?.LimitDay.value || 0)
    .tz()
    .format('YYYY/MM/DD')
)

/**
 * - - - - - - - - - - - - - - - - - - - -
 * データ
 * - - - - - - - - - - - - - - - - - - - -
 */

/** 問い合わせ種別ごとのクラス定義 */
const QTYPE_CLASSES = [
  { label: '製品について', classes: ['bg-violet-200'] },
  { label: '受発注について', classes: ['bg-teal-200'] },
  { label: 'お客様対応について', classes: ['bg-amber-200'] },
  { label: 'その他', classes: ['bg-zinc-200'] },
]
</script>

<!--
============================================================
  テンプレート
============================================================
-->
<template>
  <li
    class="mb-2 mr-1 p-1 max-w-[400px] h-fit bg-white rounded-lg border border-slate-600 shadow-md"
  >
    <div
      class="py-1 flex items-center justify-between border-b border-dashed border-slate-200"
    >
      <div class="font-bold tet-md">🏢{{ customer }}</div>
      <div
        class="m-0.5 px-2 py-1 w-fit whitespace-nowrap text-xs font-bold rounded-full"
        :class="qTypeClasses"
      >
        {{ qType }}
      </div>
    </div>
    <div class="px-2 py-4 text-md whitespace-pre-wrap">{{ detail }}</div>
    <div class="flex items-center justify-between text-sm">
      <div class="text-green-900">⏱{{ received }}</div>
      <div class="text-red-900">
        <span class="pr-0.5 text-red-600">✔</span>{{ limit }}
      </div>
    </div>
  </li>
</template>

<!--
============================================================
  スタイル
============================================================
-->
<style scoped>
@import url('@/style.css');
</style>
