<div class="payroll-container">
    <div class="w3-display-container w3-center">
        <br/><h3>Santa Teresa Bottleshop Payroll</h3> <br/>
    </div>
    <div class="container">
        <div class="w3-half w3-padding-large">
            <div class="w3-container w3-card-4 w3-light-grey">
                <h3>Paramvir</h3>
                <p>
                    <label>Enter the hours he worked this month</label>
                    <input type="text" class="w3-input w3-border" name="first" ng-model="paramvir" ng-change="paramvirsPay(paramvir)">
                </p>
            </div>
            <h4 class="bg-success" ng-show="paramvir > 0" style="padding:5px;">{{paramvirTotalPay | currency }}{{paramvirChecks}}</h4>
            <p ng-show="paramvir > 0">
                <label><input type="checkbox" class="w3-check" ng-model="paramvirCheckbox">Show me how did you calculate it.</label>
            </p>
            <div id="paramvir" ng-show="paramvirCheckbox && paramvir >0"></div>
        </div>
        <div class="w3-half w3-padding-large">
            <div class="w3-container w3-card-4 w3-light-grey">
                <h3>Sandeep</h3>
                <p>      
                    <label>Enter the hours he worked this month</label>
                    <input type="text" class="w3-input w3-border" ng-model="sandeep" ng-change="sandeepPay(sandeep)"></p>
            </div>
            <h4 class="bg-success" ng-show="sandeep > 0"style="padding:5px;">{{sandeepTotalPay | currency }}{{sandeepChecks}}</h4>
            <p ng-show="sandeep > 0">
                <label><input type="checkbox" class="w3-check" ng-model="sandeepCheckbox">Show me how did you calculate it.</label>
            </p>
            <div id="sandeep" ng-show="sandeepCheckbox && sandeep >0"></div>
        </div>
    </div>
</div>