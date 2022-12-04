<!--
######################################################################
  kintone + TailwindCSS コラボテスト
  List コンポーネント
    カードのコンテナとしてボディに並べて表示する
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
import { computed, PropType, ref } from 'vue'

/**
 * - - - - - - - - - - - - - - - - - - - -
 * コンポーネント
 * - - - - - - - - - - - - - - - - - - - -
 */

/** カードコンポーネント */
import Card from '@/components/Card.vue'

/**
 * - - - - - - - - - - - - - - - - - - - -
 * プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */
const props = defineProps({
  /** リストに表示するラベル */
  label: {
    type: String,
    required: true,
  },

  /** リストヘッダ部のカラー */
  color: {
    type: String,
    required: true,
  },

  /** リストに表示するレコード */
  records: {
    type: Array as PropType<KintoneTypes.Record[]>,
  },
})

/**
 * - - - - - - - - - - - - - - - - - - - -
 * 算出プロパティ
 * - - - - - - - - - - - - - - - - - - - -
 */

/** リストに表示するレコード */
const listRecords = ref(props.records)
</script>

<!--
============================================================
  テンプレート
============================================================
-->
<template>
  <section class="m-2">
    <h3
      class="px-2 py-1 font-bold text-white"
      :style="{ backgroundColor: color }"
    >
      {{ label }}
    </h3>
    <ul class="px-2 py-1 flex flex-wrap bg-slate-100 shadow-md">
      <template v-for="record in listRecords">
        <Card :record="record"
      /></template>
    </ul>
  </section>
</template>

<!--
============================================================
  スタイル
============================================================
-->
<style scoped></style>
