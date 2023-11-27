import moment from 'moment'

export const formatRelativeTime = (timestamp) => {
  // Tạo đối tượng moment từ timestamp
  const momentObj = moment(timestamp)

  // Trả về chuỗi mô tả khoảng thời gian
  return momentObj.fromNow()
}
