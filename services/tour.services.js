const Tour = require("../modles/Tour");
//get tours
exports.getTourService = async(queries) =>{
    const result = await Tour.find({})
    .select(queries.fields)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    ;
    return result; 
} 
//store data
exports.createTourService = async(data) =>{
    const result = await Tour.create(data);
    return result;
}
//get tour by id
exports.getTourById = async(id) =>{
    const viewCount = await Tour.updateOne({_id:id},{$inc:{viewCount:+1}});
    const result = await Tour.find({_id:id});
    return result;
}
//update tour by id
exports.updateTourById = async(id,data) =>{
    const result = await Tour.updateOne({_id:id},data,{runValidators:true});
    return result;
}
//get trending tour
exports.getTrendingTourService = async() =>{
    const result = await Tour.find({})
    .limit(3)
    .sort({viewCount:-1});
    return result;
}

//get cheapest tour
exports.getCheapestTourService = async() =>{
    const result = await Tour.find({})
    .limit(3)
    .sort({price:1});
    return result;
}

