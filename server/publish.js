Meteor.publish('blogEntries', function(){
	return BlogEntries.find({user: this.userId});
});

Meteor.publish('singleBlogEntry', function(id){
	check(id, String);
	return BlogEntries.find({_id: id});
});