
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:nikhil@cluster0-dqu8h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true } , { useNewUrlParser: true });
client.connect(err => {
	if (err) throw err;
  const collection_8 = client.db("Garda_Electronics").collection("Repair");
  

  var mydata_8 = [
    {repair_id:'01', repaircost:'$34' , name:'laptop'},
    {repair_id:'02', repaircost:'$14' , name:'mobile'},
    {repair_id:'03', repaircost:'$24' , name:'laptop'},
    {repair_id:'04', repaircost:'$54' , name:'laptop'},
    ];
	 collection_8.insertMany(mydata_8,function(err,res){
		 if (err) throw err;
		 console.log("rows inserted");
	 });
	 if (err) throw err;
	 const collection_9 = client.db("Garda_Electronics").collection("Sales");
	 var mydata_9 = [
        {sales_id:'222', product:'laptops',cust_id:'11'},
        {sales_id:'223', product:'mobile',cust_id:'12'},
        {sales_id:'226', product:'laptops',cust_id:'13'},
        {sales_id:'228', product:'monitor',cust_id:'14'},
        ];
		 collection_9.insertMany(mydata_9,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
		if (err) throw err;
		const collection_10 = client.db("Garda_Electronics").collection("Order_stock");
	 var mydata_10 =[
        {stockid:'1234', status:'out of stock', product:'laptops'},
        {stockid:'1235', status:'in stock', product:'headphones'},
        {stockid:'1236', status:'out of stock', product:'mobile'},
        {stockid:'1238', status:'out of stock', product:'cover'},
        ];
	   
		 collection_10.insertMany(mydata_10,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
  console.log("connected");
  client.close();
});

