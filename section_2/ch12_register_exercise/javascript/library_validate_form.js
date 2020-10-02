"use strict";
let RegisterForm = function(){};
RegisterForm.prototype = new Validate(); // inherit Validate methods

// Method to valildate individual fields
RegisterForm.prototype.validateField = function(fieldName, text){
  let field = fields[fieldName];

  if(field.required){
    if(this.isBlank(text)){
      throw new Error(field.required);
    }
  }

  if(field.noMatch){
    if(!this.isMatch(text, $(field.noMatch[1]).value)){
      throw new Error(field.noMatch[0]);
    }
  }

  if(field.isEmail){
    if(!this.isEmail(text)){
      throw new Error(field.isEmail);
    }
  }

  if(field.isPhone){
    if(!this.isPhone(text)){
      throw new Error(field.isPhone);
    }
  }

  if(field.isZip){
    if(!this.isZip(text)){
      throw new Error(field.isZip);
    }
  }

  if(field.isCC){
    if(!this.isCC(text)){
      throw new Error(field.isCC);
    }
  }

  if(field.isDate){
    if(!this.isDate(text)){
      throw new Error(field.isDate);
    }
  }

  if(field.expired){
    if(this.hasExpired(text)){
      throw new Error(field.expired);
    }
  }
}

// Error message methods
RegisterForm.prototype.setError = function(fieldName, message){
  $(fieldName + "_error").setAttribute("class", "error");
  $(fieldName + "_error").firstChild.nodeValue = message;
}

RegisterForm.prototype.clearError = function(fieldName, message){
  $(fieldName + "_error").setAttribute("class", "");
  $(fieldName + "_error").firstChild.nodeValue = message || "";
}

//Form methods
RegisterForm.prototype.resetForm = function(){
  for(let fieldName in fields){
    this.clearError(fieldName, fields[fieldName].message);
    $(fieldName).value = ""; // clear textbox
  }
}

RegisterForm.prototype.validateForm = function(){
  let isOk = true;
  for(let fieldName in fields){
    this.clearError(fieldName);
    try{
      this.validateField(fieldName, $(fieldName).value);
    }catch(error){
      isOk = false;
      this.setError(fieldName, error.message);
    }
  }
  return isOk;
}