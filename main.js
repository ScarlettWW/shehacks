function myFunction() {
    var style = document.getElementById("investmentstyle").value;
    var money = parseInt(document.getElementById("moneyHave").value);
    var time = document.getElementById("timeHave").value;


    if (style == "cautious"){
        if (time<=0){
            //re-enter info
        }		
        else if(time>18){
            //savings account
            document.getElementById("investType").innerHTML = "TD Every Day Savings Account";
            document.getElementById("interestRate").innerHTML = "Interest Rate: 0.05%";
            document.getElementById("time").innerHTML = "Time Period: Indefinite";
            document.getElementById("moneyMade").innerHTML = "Money earned: $" +  money*(1+0.0005/365)^(31*timeHave);
            document.getElementById("explanation").innerHTML = "A Personal savings account is an account that keeps your deposits separate from cash in hand or checking accounts. Savings accounts allow you to withdraw at any time, are extremely low risk, require low investments to start with, and are insured by the FDIC.";
        }
        else if(time>13){
            //14 months, 2.5% interest
            document.getElementById("investType").innerHTML = "TD Special Offer GIC";
            document.getElementById("interestRate").innerHTML = "Interest Rate: 2.5%";
            document.getElementById("time").innerHTML = "Time Period: 14 months";
            document.getElementById("moneyMade").innerHTML = "Money earned: $" + money*(1+0.025)^(timeHave/12);
            document.getElementById("explanation").innerHTML = "A GIC is an investment that gives you the security of a guaranteed rate combined with the flexibility of an early cashing option.  They are risk free investments with a guaranteed return on the amount you invested which is essential for short term investing. ";
        }
        else if (time>=3){
            //3 months, 1.1% interest
            document.getElementById("investType").innerHTML = "TD Special Offer GIC";
            document.getElementById("interestRate").innerHTML = "Interest Rate: 1.1%";
            document.getElementById("time").innerHTML = "Time Period: 3 months";
            document.getElementById("moneyMade").innerHTML = "Money earned: $" + money*(1+0.011)^(timeHave/12);
            document.getElementById("explanation").innerHTML = "A GIC is an investment that gives you the security of a guaranteed rate combined with the flexibility of an early cashing option.  They are risk free investments with a guaranteed return on the amount you invested which is essential for short term investing. ";
        }
        else
        {
            document.getElementById("investType").innerHTML = "Sorry, we don't have information for investments meeting those criteria. To view possible investments, consider increasing the timespan or money to invest.";
        }
    }
    else if (style=="sensitive"){
        if(time>=60){
            document.getElementById("investType").innerHTML = "TD Canadian Banking & Utilities GIC";
            document.getElementById("interestRate").innerHTML = "Interest Return: 2.75%-25%";
            document.getElementById("time").innerHTML = "Time Period: 60 months";
            document.getElementById("moneyMade").innerHTML = "Money Earned: $" + 1.0275*money + "~$" + 1.25*money;
            document.getElementById("explanation").innerHTML = "Market Growth GICs can fluctuate in their return based on the market; however, they still have a guaranteed minimum return.";		
        }
        else if(time>=36){
            document.getElementById("investType").innerHTML = "TD Canadian Banking & Utilities GIC";
            document.getElementById("interestRate").innerHTML = "Interest Return: 2.00%-18.88%";
            document.getElementById("time").innerHTML = "Time Period: 36 months";
            document.getElementById("moneyMade").innerHTML = "Money Earned: $" + 1.02*money + "~$" + 1.1888*money;
            document.getElementById("explanation").innerHTML = "Market Growth GICs can fluctuate in their return based on the market; however, they still have a guaranteed minimum return.";		
        }
        else if(time>=24){
            document.getElementById("investType").innerHTML = "TD Canadian Banking & Utilities GIC";
            document.getElementById("interestRate").innerHTML = "Interest Return: 0.75%-5.5%";
            document.getElementById("time").innerHTML = "Time Period: 24 months";
            document.getElementById("moneyMade").innerHTML = "Money Earned: $" + 1.0075*money + "~$" + 1.055*money;
            document.getElementById("explanation").innerHTML = "Market Growth GICs can fluctuate in their return based on the market; however, they still have a guaranteed minimum return.";		
        }
        else if(time>13){
            //14 months, 2.5% interest
            document.getElementById("investType").innerHTML = "TD Special Offer GIC";
            document.getElementById("interestRate").innerHTML = "Interest Rate: 2.5%";
            document.getElementById("time").innerHTML = "Time Period: 14 months";
            document.getElementById("moneyMade").innerHTML = "Money earned: $" + money*(1+0.025)^(timeHave/12);
            document.getElementById("explanation").innerHTML = "A GIC is an investment that gives you the security of a guaranteed rate combined with the flexibility of an early cashing option.  They are risk free investments with a guaranteed return on the amount you invested which is essential for short term investing. ";
        }
        else
        {
            document.getElementById("investType").innerHTML = "Sorry, we don't have information for investments meeting those criteria. To view possible investments, consider increasing the timespan or money to invest.";
        }
    }
    else if (style=="comfortable"){
        if(money>100){
            document.getElementById("investType").innerHTML = "TD Canadian Bond Index Fund";
            document.getElementById("interestRate").innerHTML = "Historical Return: 2.71% per year";
            document.getElementById("time").innerHTML = "Minimum Payment: $100";
            document.getElementById("moneyMade").innerHTML = "Estimated Money Earned: $" + 1.0271*money;
            document.getElementById("explanation").innerHTML = "Mutual funds are an investment program funded by shareholders that trades in diversified holdings. Mutual funds can hold securities from hundreds of issuers, have a low starting cost and allow you to change your portfolio balance depending on the changing of personal needs, financial goals or market conditions. They are more risky than GICs or bonds since they do not have a fixed interest return.";		
        }
        else
        {
            document.getElementById("investType").innerHTML = "Sorry, we don't have information for investments meeting those criteria. To view possible investments, consider increasing the timespan or money to invest.";
        }
    }
    else{
        document.getElementById("investType").innerHTML = "TD Direct Investing";
		document.getElementById("interestRate").innerHTML = "Return varies depending on performance of created portfolio";
		document.getElementById("time").innerHTML = "TD Direct Investing allows you to be a self-directed investor with the support of TD representatives. This can have higher risk; however, you are in control of what you invest in.";
		document.getElementById("moneyMade").innerHTML = "You should call the bank for consultation" 
		//document.getElementById("explanation").innerHTML = "Mutual funds are an investment program funded by shareholders that trades in diversified holdings. Mutual funds can hold securities from hundreds of issuers, have a low starting cost and allow you to change your portfolio balance depending on the changing of personal needs, financial goals or market conditions. They are more risky than GICs or bonds since they do not have a fixed interest return.";		
    }  
};
