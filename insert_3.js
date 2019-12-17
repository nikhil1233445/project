  
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:nikhil@cluster0-dqu8h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true } , { useNewUrlParser: true });
client.connect(err => {
	if (err) throw err;
  const collection_2 = client.db("Garda_Electronics").collection("Mobile_Accessories");
 

  var mydata_3 = [
	{id: "01" ,name:'cover', price:'$12'},
	{id: "01" ,name:'earphones', price:'$123'},
	{id: "01" ,name:'glasscover', price:'$10'},
	{id: "01" ,name:'cover', price:'$11'},
	];
	 collection_2.insertMany(mydata_3,function(err,res){
		 if (err) throw err;
		 console.log("rows inserted");
	 });
	 if (err) throw err;
	 const collection_3 = client.db("Garda_Electronics").collection("Orders");
	 var mydata_4 =[
		{order_id:'124', order_status:'shipped', orderdate:'october19'},
		{order_id:'128', order_status:'proccesing', orderdate: 'november29'},
		{order_id:'123', order_status:'sold', orderdate:'september19'},
		{order_id:'122', order_status:'shipped', orderdate:'april19'},
		];
		 collection_3.insertMany(mydata_4,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
		if (err) throw err;
		const collection_4 = client.db("Garda_Electronics").collection("Warrenty");
	 var mydata_5 =[
		{Warrenty_id: '01',cust_id:'11',period:'sixmonths'},
		{Warrenty_id: '02',cust_id:'12',period:'sixmonths'},
		{Warrenty_id: '03',cust_id:'13',period:'sixmonths'},
		{Warrenty_id: '04',cust_id:'14',period:'sixmonths'},
		];
	   
		 collection_4.insertMany(mydata_5,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
  console.log("connected");
  client.close();
});




