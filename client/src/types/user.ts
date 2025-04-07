export interface UserWithToken {
  access_token: string;
  refresh_token: string;
  user: User;
}
export interface User {
  id: string;
  google_id: string;
  profile_picture: string;
  name: string;
  email: string;
  phone: string;
  is_admin: boolean;
  address: Address;
  create_at: string;
}
export interface Address {
  home_code: string;
  street: string;
  district: string;
  province: string;
  full_address: string;
}
