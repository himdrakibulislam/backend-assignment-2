const { getTourService, createTourService, getTourById, getTrendingTourService, getCheapestTourService, updateTourById } = require("../services/tour.services");

//get product
exports.getTours = async(req,res,next)=>{
  try {
    const queries = {};
    //fields
    if(req.query.fields){
      const fields  = req.query.fields.split(',').join(' ');
      queries.fields = fields;
    }
    //pagination
    if(req.query.page){
      const {page=1,limit=1} = req.query;
      const skip = (page-1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    //sort 
    if(req.query.sort){
      const sort = req.query.sort.split(',').join(' ');
      queries.sortBy = sort;
    }
    const tour = await getTourService(queries);
      res.status(200).json({
        status:'Success',
        data: tour
      });
    } catch (error) {
      res.status(400).json({
        status:"failed",
        messagse:"Can't get the data"
      })
    }
  }
  //store tour data
  exports.createTour = async (req,res,next) =>{
    try {

      const result = await createTourService(req.body);
        
        res.status(200).json({
          status:'Success',
          data: result
        });
      } catch (error) {
        res.status(400).json({
          status:"failed",
          messagse:"Can't add tour"
        })
      }
  }
  
  //get tour by id
  exports.getById = async (req,res,next) =>{
    try {
      const id = req.params.id;
      
      const result = await getTourById(id);
        
        res.status(200).json({
          status:'Success',
          data: result
        });
      } catch (error) {
        res.status(400).json({
          status:"failed",
          messagse:"Can't get tour"
        })
      }
  }
  //update by id
  exports.updateById = async (req,res,next) =>{
    try {
      const {id} = req.params;
      const data = req.body;
      console.log("Iam from update",id,data);
      const result = await updateTourById(id,data);
        
        res.status(200).json({
          status:'Success',
          data: result
        });
      } catch (error) {
        res.status(400).json({
          status:"failed",
          messagse:"Can't get tour"
        })
      }
  }
  //get trending tour 
  exports.getTrendingTour = async (req,res,next) =>{
    try {

      const result = await getTrendingTourService();
        
        res.status(200).json({
          status:'Success',
          data: result
        });
      } catch (error) {
        res.status(400).json({
          status:"failed",
          messagse:"Can't get tour"
        })
      }
  }
  //get cheapest tour 
  exports.getCheapestTour = async (req,res,next) =>{
    try {

      const result = await getCheapestTourService();
        
        res.status(200).json({
          status:'Success',
          data: result
        });
      } catch (error) {
        res.status(400).json({
          status:"failed",
          messagse:"Can't get tour"
        })
      }
  }
