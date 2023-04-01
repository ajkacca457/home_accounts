export const returnChartData=(category)=>{

    return category?Object.values(category).map((item)=>{
        return {
          label:item.title,
          value:item.amount
        }
      }): [];

}

