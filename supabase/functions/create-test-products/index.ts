import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Check if user is admin
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')
    const { data: { user } } = await supabase.auth.getUser(token)

    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Insert test products
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: 'Premium Cheat Package',
          description: 'Professional gaming enhancement toolkit with advanced features and undetected status',
          price: 79.99,
          category: 'Premium Packages',
          features: ['Aimbot', 'ESP/Wallhack', 'Radar', 'No Recoil', 'Auto Updates'],
          status: 'active',
          image_url: '/src/assets/product-box.png',
          anti_cheat_compatibility: ['EAC (Easy Anti-Cheat)', 'BattlEye', 'Vanguard'],
          is_permanent: true,
          detection_status: 'undetected'
        },
        {
          name: 'Elite Gaming Tool',
          description: 'Next-gen gaming enhancement with military-grade protection',
          price: 99.99,
          category: 'Elite Tools',
          features: ['Advanced Aimbot', 'Player ESP', 'Item ESP', 'Speed Hack', '24/7 Support'],
          status: 'active',
          image_url: '/src/assets/product-box.png',
          anti_cheat_compatibility: ['EAC (Easy Anti-Cheat)', 'BattlEye'],
          is_permanent: false,
          detection_status: 'updated'
        },
        {
          name: 'Pro Spoofer Kit',
          description: 'Complete HWID spoofing solution for maximum protection',
          price: 59.99,
          category: 'Spoofers',
          features: ['HWID Reset', 'MAC Spoofing', 'Disk Serial Change', 'Registry Cleanup', 'Auto Protection'],
          status: 'active',
          image_url: '/src/assets/product-box.png',
          anti_cheat_compatibility: ['EAC (Easy Anti-Cheat)', 'BattlEye', 'XIGNCODE3'],
          is_permanent: true,
          detection_status: 'undetected'
        }
      ])
      .select()

    if (error) throw error

    return new Response(JSON.stringify({ success: true, products: data }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
