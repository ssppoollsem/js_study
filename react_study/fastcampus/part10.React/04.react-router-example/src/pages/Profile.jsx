import { useParams } from 'react-router-dom';

export default function Profile() {
    const params = useParams();
    const productId = params.id;
    console.log(productId, typeof productId);
    return (
        <div>
            <h2>Profile 페이지입니다.</h2>
            {productId && <p>id는 {productId} 입니다.</p>}
        </div>
    );
}
