<div class="createOrder-container">
    <div class="w3-display-container w3-center">
      <br/><h3>Create Order</h3> <br/>
    </div>
    <table id="example" class="w3-table w3-striped w3-border">
        <thead class="w3-large">
            <tr class="w3-light-green" >
                <th style="text-align:left; border-bottom:none; vertical-align: middle;" rowspan="2" class="w3-tangerine">Liquor Name</th>
                <th style="border-bottom:none;text-align:center; " colspan="7">Sizes</th>
            </tr>
            <tr class="w3-light-green">
                <th style="border-right:none;">50ml</th>
                <th style="border-right:none; border-left:none;">100ml</th>
                <th style="border-right:none; border-left:none;">200ml</th>
                <th style="border-right:none; border-left:none;">375ml</th>
                <th style="border-right:none; border-left:none;">750ml</th>
                <th style="border-right:none; border-left:none;">1Lt</th>
                <th>1.75Lt</th>
            </tr>
        </thead>
        <tbody>
          <tr ng-repeat="obj in mapping">
              <td ng-model="table[obj.name]" class="caps">{{obj.name}}</td>  
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[0])" ng-click="toggle(obj.name,obj.size[0])" ><span class="price-label">${{obj.price[0]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[1])" ng-click="toggle(obj.name,obj.size[1])" ><span class="price-label">${{obj.price[1]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[2])" ng-click="toggle(obj.name,obj.size[2])" ><span class="price-label">${{obj.price[2]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[3])" ng-click="toggle(obj.name,obj.size[3])" ><span class="price-label">${{obj.price[3]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[4])" ng-click="toggle(obj.name,obj.size[4])" ><span class="price-label">${{obj.price[4]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[5])" ng-click="toggle(obj.name,obj.size[5])" ><span class="price-label">${{obj.price[5]}}</span></label>
              </td>
              <td>
                  <label><input type="checkbox" class="w3-check" ng-checked="isExists(obj.name,obj.size[6])" ng-click="toggle(obj.name,obj.size[6])" ><span class="price-label">${{obj.price[6]}}</span></label>
              </td>
          </tr>    
        </tbody>
    </table>
    <div class="row-fluid">
        <div class="col-md-4 ">
            <div class="alert alert-primary" ng-show="selected.length !== 0">
                <div class="alert-info caps" ng-repeat="obj in selected track by $index" style="padding:5px 10px;">{{$index+1}}. {{obj}}</div>
            </div>
        </div>
        <div class="col-md-offset-8"></div>
    </div>
    
    <button type="submit" class="addBtn1" ng-click="tableSubmit(table)">Submit</button>
</div>
