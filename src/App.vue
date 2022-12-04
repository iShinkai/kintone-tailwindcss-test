<!--
######################################################################
  kintone + TailwindCSS コラボテスト
  App コンポーネント
    カスタマイズビューに表示される
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
import { KintoneFormFieldProperty } from '@kintone/rest-api-client'

/**
 * - - - - - - - - - - - - - - - - - - - -
 * コンポーネント
 * - - - - - - - - - - - - - - - - - - - -
 */

/** リストコンポーネント */
import List from '@/components/List.vue'

/**
 * - - - - - - - - - - - - - - - - - - - -
 * プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */
const props = defineProps({
  /** アプリのフィールド情報 */
  fieldInfo: {
    type: Object as PropType<typeof KintoneFormFieldProperty>,
    required: true,
  },

  /** レコード配列 */
  records: {
    type: Array as PropType<KintoneTypes.Record[]>,
  },
})

/**
 * - - - - - - - - - - - - - - - - - - - -
 * 算出プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */

/** 対応状況の配列 */
const ListLabels = computed(() => {
  const statusOptions = props.fieldInfo.Status.options
  const keys = Object.keys(statusOptions)
  console.log(keys)
  const options = keys.map((key) => statusOptions[key])
  console.log(options)
  const labels = options
    .sort((a, b) => parseInt(a.index) - parseInt(b.index))
    .map((opt) => opt.label)

  return labels
})

/** レコード配列 */
const getStatusRecords = (status: string) => {
  if (props.records) {
    const records = props.records.filter(
      (record) => record.Status.value === status
    )
    return records
  }
  return []
}

/**
 * - - - - - - - - - - - - - - - - - - - -
 * データ
 * - - - - - - - - - - - - - - - - - - - -
 */

/** リストのヘッダ部のカラー配列 */
const LIST_HEADER_COLORS = [
  '#be123c' /** rose-700 */,
  '#047857' /** emerald-700 */,
  '#0369a1' /** sky-700 */,
]
</script>

<!--
============================================================
  テンプレート
============================================================
-->
<template>
  <div class="p-6 flex flex-col bg-cyan-100">
    <List
      v-for="(label, index) in ListLabels"
      :label="label"
      :color="LIST_HEADER_COLORS[index]"
      :records="getStatusRecords(label)"
    />
  </div>
</template>

<!--
============================================================
  スタイル
============================================================
-->
<style scoped></style>
