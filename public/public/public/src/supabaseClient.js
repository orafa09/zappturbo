import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'COLE_AQUI_SUA_SUPABASE_URL';
const supabaseAnonKey = 'COLE_AQUI_SUA_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
