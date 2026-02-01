import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gyewrixcvjoezmafqzvt.supabase.co'
const supabaseKey = 'sb_publishable_5DBWUnGUdOELb0CIUoMtow_SI151NKL'
export const supabase = createClient(supabaseUrl, supabaseKey)