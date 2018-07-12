var Product1 = [];
Product1["ProductID"] = 101;
Product1["ProductName"] = "MacBook Air";
Product1["ProductPrice"] = 125000.00;
Product1["ProductType"] = "Laptop";

var Product2 = [];
Product2["ProductID"] = 108;
Product2["ProductName"] = "iPhone 8";
Product2["ProductPrice"] = 85000.00;
Product2["ProductType"] = "Mobile";

var Product3 = [];
Product3["ProductID"] = 100;
Product3["ProductName"] = "Samsung";
Product3["ProductPrice"] = 35000.00;
Product3["ProductType"] = "Watch";

var Product4 = [];
Product4["ProductID"] = 109;
Product4["ProductName"] = "Vivo";
Product4["ProductPrice"] = 98000.00;
Product4["ProductType"] = "LED";

var Products = [Product1, Product2, Product3, Product4];
   function showData() {
        	
                var x = document.getElementById('x');
                for(i in Products) {
                    var Product = Products[i];
                    var tr = document.createElement("tr");
                    tr.classList.add("y");
                    for(t in Product){
                        var td = document.createElement("td");
                        td.innerHTML = "<b>" + Product[t] + "</b>";
                        tr.appendChild(td);
                    }
				x.appendChild(tr);
        	   }
			}

			function sortByID() {
				var d = [];
				for(i in Products){
					var Product = Products[i];
					d[i] = Product["ProductID"];
				}
				for(var i = 0; i< d.length ; i++) {
					for(var j = i+1; j< d.length ; j++) {
					if (d[i] - d[j] > 0){
							temp = Products[i];
							Products[i] = Products[j];
							Products[j] = temp;
					}
				}
			}
			showData();
			} 

			function sortByName() {
				var d = [];
				for(i in Products){
					var Product = Products[i];
					d[i] = Product["ProductName"];
				}
				console.log(d);
				for(var i = 0; i< d.length ; i++) {
					for(var j = i+1; j< d.length ; j++) {
					if (d[i].localeCompare(d[j])== 1){
							temp = Products[i];
							Products[i] = Products[j];
							Products[j] = temp;
					}
				}
			}
			showData();
			}

			function sortByPrice() {
				var d = [];
				for(var i in Products){
					var Product = Products[i];
					d[i] = Product["ProductPrice"];
				}
				console.log(d);
				for(var i = 0; i< d.length ; i++) {
					for(var j = i+1; j< d.length ; j++) {
					if (d[i] > d[j]){
							temp = Products[i];
							Products[i] = Products[j];//sorting nd swaping array
							Products[j] = temp;
					}
				}
			}
			showData();
			}

			function sortByType() {
				var d = [];
				for(i in Products){
					var Product = Products[i];
					d[i] = Product["ProductType"];
				}
				//console.log(d);
				for(var i = 0; i< d.length ; i++) {
					for(var j = i+1; j< d.length ; j++) {
					if (d[i].localeCompare(d[j])== 1){
							temp = Products[i];
							Products[i] = Products[j];
							Products[j] = temp;
					}
				}
			}
			showData();
			//console.log(d);
			//console.log(Products);
			}