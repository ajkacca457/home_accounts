import {FcMoneyTransfer} from "react-icons/fc";
import {GiProfit,GiMoneyStack,GiPayMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";

export const returnChartData=(category)=>{

    return category?Object.values(category).map((item)=>{
        return {
          label:item.title,
          value:item.amount
        }
      }): [];

}



export const returnIncomeCardData=(item={})=>{

    const CardData= [
        {
           id:1,
           title:"Investment",
           amount:item.Investment?item.Investment.amount:0,
           count:item.Investment?item.Investment.count:0,
           icon: <FcMoneyTransfer/>
        },
        {
            id:2,
            title:"Profit",
            amount:item.Profit?item.Profit.amount:0,
            count:item.Profit?item.Profit.count:0,
            icon: <GiProfit/>
         },
         {
            id:3,
            title:"Salary",
            amount:item.Salary?item.Salary.amount:0,
            count:item.Salary?item.Salary.count:0,
            icon: <GiMoneyStack/>
         },
         {
            id:4,
            title:"Interest",
            amount:item.Interest?item.Interest.amount:0,
            count:item.Interest?item.Interest.count:0,
            icon: <GiPayMoney/>
         },
         {
            id:5,
            title:"Other",
            amount:item.Other?item.Other.amount:0,
            count:item.Other?item.Other.count:0,
            icon: <TbPigMoney/>
         },
    ]

    return CardData;
}

export const returnExpenseCardData=(item={})=>{
    
    const CardData= [
        {
           id:1,
           title:"Groceries",
           amount:item.Groceries?item.Groceries.amount:0,
           count:item.Groceries?item.Groceries.count:0,
           icon: <FcMoneyTransfer/>
        },
        {
            id:2,
            title:"Health",
            amount:item.Health?item.Health.amount:0,
            count:item.Health?item.Health.count:0,
            icon: <GiProfit/>
         },
         {
            id:3,
            title:"Rent",
            amount:item.Rent?item.Rent.amount:0,
            count:item.Rent?item.Rent.count:0,
            icon: <GiMoneyStack/>
         },
         {
            id:4,
            title:"Insurance",
            amount:item.Insurance?item.Insurance.amount:0,
            count:item.Insurance?item.Insurance.count:0,
            icon: <GiPayMoney/>
         },
         {
            id:5,
            title:"Entertainment",
            amount:item.Entertainment?item.Entertainment.amount:0,
            count:item.Entertainment?item.Entertainment.count:0,
            icon: <TbPigMoney/>
         },
         {
            id:6,
            title:"Education",
            amount:item.Education?item.Education.amount:0,
            count:item.Education?item.Education.count:0,
            icon: <TbPigMoney/>
         },
         {
            id:7,
            title:"Miscellaneous",
            amount:item.Miscellaneous?item.Miscellaneous.amount:0,
            count:item.Miscellaneous?item.Miscellaneous.count:0,
            icon: <TbPigMoney/>
         },
    ]

    return CardData;
}

export const returnStatsCard=(type,item={})=>{
    let cardData=[];

    if(type==="income") {
        cardData=
        [        
            {
                id:1,
                title:"Incoming",
                amount:item.incoming?item.incoming.amount:0,
                count:item.incoming?item.incoming.count:0,
                icon: <FcMoneyTransfer/>
            },
            {
                id:2,
                title:"Received",
                amount:item.received?item.received.amount:0,
                count:item.Health?item.Health.count:0,
                icon: <GiProfit/>
            }
        ]
    } else {
        cardData=
        [        
            {
                id:1,
                title:"Paid",
                amount:item.paid?item.paid.amount:0,
                count:item.paid?item.paid.count:0,
                icon: <FcMoneyTransfer/>
            },
            {
                id:2,
                title:"Due",
                amount:item.due?item.due.amount:0,
                count:item.due?item.due.count:0,
                icon: <GiProfit/>
            }
        ]        
    }

return cardData;

}