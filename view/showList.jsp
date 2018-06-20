    <div class="createOrder-container">
        <div class="w3-display-container w3-center">
        <br/><h3>List Order</h3> <br/>
        </div>
        <table id="example" class="w3-table w3-striped w3-border">
        <thead class="w3-large">
        <tr class="w3-light-green" >
        <th style="text-align:left; border-bottom:none; vertical-align: middle;" rowspan="2" class="w3-tangerine">Invoicedate</th>
        <th style="border-right:none;">invoiceNum</th>
        <th style="border-right:none; border-left:none;">liqName</th>
        <th style="border-right:none; border-left:none;">liqSize</th>
        <th style="border-right:none; border-left:none;">salesPerson</th>
        </tr>
        </thead>
        <tbody>

        <tr ng-repeat="data in orderList">
        <td  class="caps">{{data.Invoicedate}}</td>
        <td  class="caps">{{data.invoiceNum}}</td>
        <td  class="caps">{{data.liqName}}</td>
        <td class="caps">{{data.liqSize}}</td>
        <td  class="caps">{{data.salesPerson}}</td>
        </tr>
        </tbody>
        </table>
        </div>
        <div>{{orderList}}</div>
