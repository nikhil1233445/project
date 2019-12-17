
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser:nikhil@cluster0-dqu8h.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true } , { useNewUrlParser: true });
client.connect(err => {
	if (err) throw err;
  const collection = client.db("Garda_Electronics").collection("Employees");

  var mydata =  [
    {Employee_Id: '101', Employee_name: 'Rohan', Address: "55 borugh" },
    {Employee_Id: '102', Employee_name: 'Jagga', Address: "55 prince phillip" },
    { Employee_Id: '103',Employee_name: 'Singh', Address: "5 cedar drive" },
    {  Employee_Id: '103',Employee_name: 'Sapna', Address: "5 charcoal drive"},
  ];
	 collection.insertMany(mydata,function(err,res){
		 if (err) throw err;
		 console.log("rows inserted");
	 });
	 if (err) throw err;
	 const collection_0 = client.db("Garda_Electronics").collection("Phone");
	 var mydata_1 = [
        {Phone_id:'01', model:'iphonex', price: '$345', },
        {Phone_id:'02', model:'iphone8', price: '$145'},
        {Phone_id:'03', model:'iphonex', price: '$345'},
        {Phone_id:'04', model:'iphonex', price: '$345'},
        ];
		 collection_0.insertMany(mydata_1,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
		if (err) throw err;
		const collection_1 = client.db("Garda_Electronics").collection("Customers");
	 var mydata_2 =[
        {cust_id:'11',  First_name: 'Nikhil', Last_name: 'Sharma' , address:'toronto'},
        {cust_id:'12', address:'brampton' , First_name: 'Ravneet', Last_name: 'Singh'},
        {cust_id:'13', address:'toronto',First_name: 'Randeep', Last_name: 'Singh'},
        {cust_id:'14', address:'ottawa',  First_name: 'Rajdeep', Last_name: 'Kaur'},
        ];
	   
		 collection_1.insertMany(mydata_2,function(err,res){
			if (err) throw err;
			console.log("rows inserted");
		});
  console.log("connected");
  client.close();
});




