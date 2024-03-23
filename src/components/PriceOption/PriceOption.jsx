import Price from "../Price/Price";


const PriceOption = () => {

   const priceOptions= [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Access to locker room",
            "Limited group fitness classes",
            "Personalized workout plan"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$50/month",
          "features": [
            "Access to all facilities",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "Discounts on personal training sessions",
            "Nutritional counseling",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "$80/month",
          "features": [
            "Access for 2 adults and 2 children",
            "Access to all facilities",
            "Limited group fitness classes",
            "Discounts on additional family members",
            "Childcare services",
            "Family workout sessions"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
             priceOptions.map(option => <Price key={option.id} option={option}></Price>)   
            }
           </div>
        </div>
    );
};

export default PriceOption;