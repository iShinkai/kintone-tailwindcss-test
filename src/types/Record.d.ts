declare namespace KintoneTypes {
  interface Record {
    Status: kintone.fieldTypes.DropDown
    LimitDay: kintone.fieldTypes.Date
    Customer: kintone.fieldTypes.SingleLineText
    ReceptionDate: kintone.fieldTypes.DateTime
    文字列__1行__0: kintone.fieldTypes.SingleLineText
    QType: kintone.fieldTypes.RadioButton
    Detail: kintone.fieldTypes.MultiLineText

    Person: kintone.fieldTypes.UserSelect
    対応詳細: {
      type: 'SUBTABLE'
      value: Array<{
        id: string
        value: {
          文字列__複数行__1: kintone.fieldTypes.MultiLineText
          日時_0: kintone.fieldTypes.DateTime

          添付ファイル: kintone.fieldTypes.File
        }
      }>
    }
  }
  interface SavedRecord extends Record {
    $id: kintone.fieldTypes.Id
    $revision: kintone.fieldTypes.Revision
    更新者: kintone.fieldTypes.Modifier
    作成者: kintone.fieldTypes.Creator
    レコード番号: kintone.fieldTypes.RecordNumber
    更新日時: kintone.fieldTypes.UpdatedTime
    作成日時: kintone.fieldTypes.CreatedTime
  }
}
