<div class="w3-display-container w3-center">
    <br/><h3>Search liquor by different ways</h3> <br/>
</div>
<div class="w3-row bottom-20" >
    <div class="w3-third w3-container">
            <div class="eLabel">Search by liquor name: </div>
                <select class="formField-div" ng-model="liqName"  name="facilityList" aria-invalid="true" ng-change="selectLiquor(liqName)"required>
                        <option id="select-a-facility" value="" selected="true">Search by Liquor name</option>
                        <option ng-repeat="liq in mapping" value="{{liq.name}}">{{liq.name}}</option>
                    </select>
    </div>
    <div class="w3-twothird w3-container">
        <table class="w3-table w3-striped w3-border"  ng-show="liquorMapping !== null">
            <thead>
                <tr class="w3-light-green">
                    <th nowrap>
                        <a href="" ng-click="sortBy('checkinDate')">Date</a>
                        <span class="sortorder" ng-class="{reverse:reverse}"></span>
                    </th>
                    <th nowrap>
                        <a href="" ng-click="sortBy('invoiceId')">Invoice Number</a>
                        <span class="sortorder" ng-class="{reverse:reverse}"></span>
                    </th>
                    <th nowrap>
                        <a href="" ng-click="sortBy('size')">Size</a>
                        <span class="sortorder" ng-class="{reverse:reverse}"></span>
                    </th>
                    <th nowrap>
                        <a href="" ng-click="sortBy('price')">Price</a>
                        <span class="sortorder" ng-class="{reverse:reverse}"></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="{{}}" ng-repeat="d in liquorMapping | filter:{checkinDate:qq} | orderBy:propertyName:reverse as results">
                    <td>{{d.checkinDate | date: 'MMM-dd-yy'}}</td>
                    <td class="{{obj.actionPlan}}">{{d.invoiceId}}</td>
                    <td>{{d.size}} ml</td>
                    <td>{{d.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>        
<div class="w3-row bottom-20">
    <div id="" class="w3-third w3-container">
        <p>
           <label class="eLabel">Search by invoice date:</label>
           <input type="date" class="w3-input w3-border formField-div" name="invoiceDate" ng-model="invoiceDate" ng-change="captureDate(invoiceDate)">
        </p>
    </div>
    <div class="w3-twothird w3-container"></div>
</div>
<div class="w3-row bottom-20">
    <div id="" class="w3-third w3-container">
        <p>
           <label class="eLabel">Search by invoice number:</label>
           <input id="invoiceNum" type="text" class="w3-input w3-border formField-div" name="invoiceNum" ng-model="invoiceNum" ng-change="removeRedClass()(invoiceNum)" ng-paste="pasted()">
        </p>
    </div>
    <div class="w3-twothird w3-container"></div>
</div>