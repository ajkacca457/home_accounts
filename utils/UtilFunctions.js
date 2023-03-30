export const CommonReducer=(items)=>{
   return items.reduce((acc,curr)=>{
        const {_id:title,amount, count}= curr;
        acc[title]={amount,count};
        return acc;
    },{})
}