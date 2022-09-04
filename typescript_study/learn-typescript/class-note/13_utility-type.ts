interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

// *---------------------------------------------------------------*

// 2. 특정 상품의 상세정보를 나타내기 위한 API 함수
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
// function displayProductDetail(shoppingItem: ProductDetail) {}

// 불필요하게 같은 타입을 정의할 필요없이 Pick을 통해 원하는 타입만 가져올 수 있다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ShoppingItem) {}

// *---------------------------------------------------------------*

// 3. 특정 상품 정보를 업데이트하는 함수
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
// function updateProductItem(productItem: UpdateProduct) {}

// Partial은 모든 속성을 Optional 처리한다.
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {}

// *---------------------------------------------------------------*

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// 첫 번째 방식
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// 두 번째 방식 (첫 번째 방식에서 코드 줄이기)
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// };
// type UserProfileKeys = keyof UserProfile;

// 세 번째 방식 (두 번째 방식에서 코드 줄이기)
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 네 번째 방식 (세 번째 방식에서 코드 줄이기)
// 이게 바로 Partial 구현체와 동일하다.
type Subset<T> {
  [p in keyof T]?: T[p];
}