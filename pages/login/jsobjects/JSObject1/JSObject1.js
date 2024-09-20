export default {
	myFun1 () {
		const a = Input1.text;
		const b = Input2.text
		const result = Query1.run(a,b)
		
		if(result){
			showAlert('login successful','success')
		}
		else{	
			showAlert('invalid email or password','error')
		}
		return Object.values(result)
	}
}