# Questions and Answers

**Questions 1:** What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
**Answer 1:** The purpose of the creating a model with an interface and schema is we can take structured and consistent data. We can validate data. So that we can take the filtered data into our database.


**Question 2:** Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
**Answer2:** We can filter by data with project method. If we want to include data we can specify a 1 as value of that field. And  0 if we don't want to include.

**Question 3:**  What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
**Answer2:** Instance method are special kind of function that is associated with the model that can modify and bring/return something based on the requirements.
**Example**

    const mongoose = require('mongoose');
	const userSchema = new mongoose.Schema({ 
		firstName: String,
		lastName: String,
		email: String,
	});
	//defining a instance method
	userSchema.mehod.getFullName = function() {
		return this.firstName +	" " + this.lastname;
	}
**Question4**  How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

    db.practice.find({age: {$gt: 18}})
**Question 5:** What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
**Answer**
The "in" operator is used to match documents where a specified field's value matches any value in a given array. It takes an array of values and returns documents where the field matches any of those values.

The "nin" operator is used to exclude documents where a specified field's value matches any value in a given array. It works opposite to the "in" operator.