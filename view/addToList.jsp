<div class="w3-display-container w3-center">
  <br/><h3>Add Newly Bought Liquor to DB</h3> <br/>
</div>
<div id="liquorEntryForm" class="w3-row" style="border: 1px solid #DDD;width:80%; padding:20px; margin:0 auto;">
    <form name="liquorEntryForm" novalidate ng-class="{submitted:submitted}">     
        <div class="w3-row">
            <div id="" class="w3-third w3-container">
                <!--div class="medicalCenter-titles">Select Liquor name from the List </div-->
                <select class="formField-div" ng-model="dbEntry.liqName"  name="facilityList" aria-invalid="true" ng-change="selectLiquor(dbEntry.liqName)"required>
                    <option id="select-a-facility" value="" selected="true">Select Liquor </option>
                    <option ng-repeat="liq in mapping.liquorName" value="{{liq}}">{{liq}}</option>
                </select>
            </div>
            <div id="" class="w3-third w3-container">
            <!--div class="medicalCenter-titles">Select Size </div-->
                <select class="formField-div" ng-model="dbEntry.liqSize"  name="facilityList" aria-invalid="true" ng-change="selectLiquor(dbEntry.liqSize)"required>
                    <option id="select-a-facility" value="" selected="true">Select size</option>
                    <option ng-repeat="size in mapping.sizes" value="{{size}}">{{size}}</option>
                </select>
            </div>
            <div id="" class="w3-third w3-container">
                <!--div class="medicalCenter-titles">Select Salesperson</div-->
                <select class="formField-div" ng-model="dbEntry.salesPerson"  name="facilityList" aria-invalid="true" ng-change="selectSalesPerson(dbEntry.salesPerson)"required>
                    <option id="select-a-facility" value="" selected="true">Select Salesperson</option>
                    <option ng-repeat="person in mapping.salesman" value="{{person}}">{{person}}</option>
                </select>
            </div>
        </div>
        <div class="w3-row">
            <div id="" class="w3-third w3-container">
                <p>
                   <label class="dropdown-title">Invoice Date:</label>
                   <input type="date" class="w3-input w3-border formField-div" name="invoiceDate" ng-model="dbEntry.invoiceDate" ng-change="captureDate(dbEntry.invoiceDate)" required/>
                </p>
            </div>
            <div id="" class="w3-third w3-container">
                <p>
                   <label class="dropdown-title">Invoice Number:</label>
                   <input id="invoiceNum" type="text" class="w3-input w3-border formField-div" name="invoiceNum" ng-model="dbEntry.invoiceNum" ng-change="removeRedClass()(invoiceNum)" ng-paste="pasted()" required>
                </p>
            </div>
            <div id="" class="w3-third w3-container"></div>
        </div>


<!--SUBMIT BUTTON-->
        <div class=" savebutton" style="margin-bottom: 0">
            <button type="button" class="addBtn1" ng-disabled="liquorEntryForm.$invalid"  ng-click="addLiqToDB(liquorEntryForm.$invalid)">Save</button>
            <button type="button" class="cancel-btn" ng-click="cancel()">Cancel</button>

        </div>
    </form>
</div>
<div class="w3-row" ng-show="entry !== null">
    <div id="" class="w3-third w3-container yellow-bg">
        <h3 class="text-center"> Entry to the records</h3><hr/>
        <div class=""><span class="yellow-headerSpan">Liquor name:</span><span>{{entry.liqName}}</span></div>
        <div class=""><span class="yellow-headerSpan">Liquor size:</span><span>{{entry.liqSize}}</span></div>
        <div class=""><span class="yellow-headerSpan">Sales Person:</span><span>{{entry.salesPerson}}</span></div>
        <div class=""><span class="yellow-headerSpan">Invoice Date:</span><span>{{entry.invoiceDate | date:"MM/dd/yyyy"}}</span> </div>
        <div class=""><span class="yellow-headerSpan">Invoice Num:</span><span>{{entry.invoiceNum}}</span></div>
    </div>
    <div id="" class="w3-third w3-container"></div>
    <div id="" class="w3-third w3-container"></div>
</div>