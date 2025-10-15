-- Create table for daily spin history
CREATE TABLE public.daily_spins (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  reward_type text NOT NULL,
  reward_value numeric NOT NULL,
  last_spin_date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.daily_spins ENABLE ROW LEVEL SECURITY;

-- Users can view their own spins
CREATE POLICY "Users can view their own spins"
ON public.daily_spins
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own spins
CREATE POLICY "Users can insert their own spins"
ON public.daily_spins
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX idx_daily_spins_user_date ON public.daily_spins(user_id, last_spin_date);

-- Create table for coupons
CREATE TABLE public.coupons (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  code text NOT NULL UNIQUE,
  discount_percentage numeric NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  used boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Users can view their own coupons
CREATE POLICY "Users can view their own coupons"
ON public.coupons
FOR SELECT
USING (auth.uid() = user_id);

-- Users can update their own coupons (mark as used)
CREATE POLICY "Users can update their own coupons"
ON public.coupons
FOR UPDATE
USING (auth.uid() = user_id);

-- System can insert coupons (will be done via edge function or client)
CREATE POLICY "Anyone can insert coupons"
ON public.coupons
FOR INSERT
WITH CHECK (true);