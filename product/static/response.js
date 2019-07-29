function Response(){
    if (!(this instanceof Response)){
        return new Response()
    }
}

Response.prototype.final_response = function(msg='', data=[], status=false){
    return {
        'msg' : this.msg,
        'data' : this.data,
        'status' : this.status
    }
};

Response.prototype.inner_function_response = function(status=false, data= []){

};

module.exports= Response;