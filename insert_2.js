
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:nikhil@cluster0-dqu8h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true } , { useNewUrlParser: true });
client.connect(err => {
	if (err) throw err;
  const collection_5 = client.db("Garda_Electronics").collection("Mobile_Insurance");
  

  var mydata_5 = [
    {insurencenumber:'4555', type: 'silver' , cust_id: '11'},
    {insurencenumber:'4558', type: 'gold' , cust_id: '12'},
    {insurencenumber:'4557', type: 'bronze' , cust_id: '13'},
    {insurencenumber:'4553', type: 'silver' , cust_id: '14'},
    ];
	 collection_5.insertMany(mydata_5,function(err,res){
		 if (err) throw err;
		 console.log("rows inserted");
	 });
	 if (err) throw err;
	 const collection_6 = client.db("Garda_Electronics").collection("Purchases");
	 var mydata_6 =[
        {purchaseid:'111' , purchasedate:'23sep10',purchasetype:'cash'},
        {purchaseid:'112' , purchasedate:'25dec19' ,purchasetype:'credit'},
        {purchaseid:'113' , purchasedate:'23sep15',purchasetype:'cash'},
        {purchaseid:'114' , purchasedate:'23sep18',purchasetype:'debit'},
        ];
		 collection_6.insertMany(mydata_6,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
        });
		if (err) throw err;
		const collection_7 = client.db("Garda_Electronics").collection("Products");
	 var mydata_7 =[
        {prduct_id:'1221', name:'laptop', cust_id:'11'},
        {prduct_id:'1226', name:'laptop', cust_id:'12'},
        {prduct_id:'1225', name:'laptop', cust_id:'13'},
        {prduct_id:'1228', name:'laptop', cust_id:'14'},
        ];
	   
		 collection_7.insertMany(mydata_7,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
  console.log("connected");
  client.close();
});




