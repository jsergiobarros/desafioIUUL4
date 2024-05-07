export interface Conversion {
  result: String,
  documentation: String,
  terms_of_use: String,
  time_last_update_unix: Date,
  time_last_update_utc: String,
  time_next_update_unix: Date,
  time_next_update_utc: String,
  base_code: String,
  target_code: String,
  conversion_rate: number
  "conversion_result": number
}
