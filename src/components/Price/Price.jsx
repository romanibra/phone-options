import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const Price = ({option}) => {
    const {name,price,features}= option
    return (
        <div className=' bg-red-400 rounded-md p-4 text-white flex flex-col'>
            <h3 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h3>
            <h4 className='3xl text-center my-8'>{name}</h4>
          <div className='flex-grow'>
          {
                features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }
          </div>
          <button className='mt-12 bg-amber-500 w-full py-2 font-bold rounded-lg hover:bg-amber-700'>Buy Now</button>
        </div>
    );
};
Price.propTypes ={
    option:PropTypes.object
}
export default Price;