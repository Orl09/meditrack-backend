const DentalRecord = require('../Models/dentalRecord');

//get all records
module.exports.getAllRecords = (userid) => {
    return DentalRecord.find({
        userId: userid

    }).then(result => {
        return result;
    })
}

        //add treatment
        module.exports.addRecord = (reqBody) => {
    
    
            let newRecord = new DentalRecord({
                
                userId: reqBody.userId,
                x18x: {
                    sections: {
                      bottomOuter: reqBody.x18x.sections.bottomOuter,
                      inner: reqBody.x18x.sections.inner,
                      topOuter: reqBody.x18x.sections.topOuter,
                      rightOuter: reqBody.x18x.sections.rightOuter,
                      leftOuter: reqBody.x18x.sections.leftOuter
                    }
                  },
                  x17x: {
                    sections: {
                      bottomOuter: reqBody.x17x.sections.bottomOuter,
                      inner: reqBody.x17x.sections.inner,
                      topOuter: reqBody.x17x.sections.topOuter,
                      rightOuter: reqBody.x17x.sections.rightOuter,
                      leftOuter: reqBody.x17x.sections.leftOuter
                    }
                  },
                  x16x: {
                    sections: {
                      bottomOuter: reqBody.x16x.sections.bottomOuter,
                      inner: reqBody.x16x.sections.inner,
                      topOuter: reqBody.x16x.sections.topOuter,
                      rightOuter: reqBody.x16x.sections.rightOuter,
                      leftOuter: reqBody.x16x.sections.leftOuter
                    }
                  },
                  x15x: {
                    sections: {
                      bottomOuter: reqBody.x15x.sections.bottomOuter,
                      inner: reqBody.x15x.sections.inner,
                      topOuter: reqBody.x15x.sections.topOuter,
                      rightOuter: reqBody.x15x.sections.rightOuter,
                      leftOuter: reqBody.x15x.sections.leftOuter
                    }
                  },
                  x14x: {
                    sections: {
                      bottomOuter: reqBody.x14x.sections.bottomOuter,
                      inner: reqBody.x14x.sections.inner,
                      topOuter: reqBody.x14x.sections.topOuter,
                      rightOuter: reqBody.x14x.sections.rightOuter,
                      leftOuter: reqBody.x14x.sections.leftOuter
                    }
                  },
                  x13x: {
                    sections: {
                      bottomOuter: reqBody.x13x.sections.bottomOuter,
                      inner: reqBody.x13x.sections.inner,
                      topOuter: reqBody.x13x.sections.topOuter,
                      rightOuter: reqBody.x13x.sections.rightOuter,
                      leftOuter: reqBody.x13x.sections.leftOuter
                    }
                  },
                  x12x: {
                    sections: {
                      bottomOuter: reqBody.x12x.sections.bottomOuter,
                      inner: reqBody.x12x.sections.inner,
                      topOuter: reqBody.x12x.sections.topOuter,
                      rightOuter: reqBody.x12x.sections.rightOuter,
                      leftOuter: reqBody.x12x.sections.leftOuter
                    }
                  },
                  x11x: {
                    sections: {
                      bottomOuter: reqBody.x11x.sections.bottomOuter,
                      inner: reqBody.x11x.sections.inner,
                      topOuter: reqBody.x11x.sections.topOuter,
                      rightOuter: reqBody.x11x.sections.rightOuter,
                      leftOuter: reqBody.x11x.sections.leftOuter
                    }
                  },
                  x21x: {
                    sections: {
                      bottomOuter: reqBody.x21x.sections.bottomOuter,
                      inner: reqBody.x21x.sections.inner,
                      topOuter: reqBody.x21x.sections.topOuter,
                      rightOuter: reqBody.x21x.sections.rightOuter,
                      leftOuter: reqBody.x21x.sections.leftOuter
                    }
                  },
                  x22x: {
                    sections: {
                      bottomOuter: reqBody.x22x.sections.bottomOuter,
                      inner: reqBody.x22x.sections.inner,
                      topOuter: reqBody.x22x.sections.topOuter,
                      rightOuter: reqBody.x22x.sections.rightOuter,
                      leftOuter: reqBody.x22x.sections.leftOuter
                    }
                  },
                  x23x: {
                    sections: {
                      bottomOuter: reqBody.x23x.sections.bottomOuter,
                      inner: reqBody.x23x.sections.inner,
                      topOuter: reqBody.x23x.sections.topOuter,
                      rightOuter: reqBody.x23x.sections.rightOuter,
                      leftOuter: reqBody.x23x.sections.leftOuter
                    }
                  },
                  x24x: {
                    sections: {
                      bottomOuter: reqBody.x24x.sections.bottomOuter,
                      inner: reqBody.x24x.sections.inner,
                      topOuter: reqBody.x24x.sections.topOuter,
                      rightOuter: reqBody.x24x.sections.rightOuter,
                      leftOuter: reqBody.x24x.sections.leftOuter
                    }
                  },
                  x25x: {
                    sections: {
                      bottomOuter: reqBody.x25x.sections.bottomOuter,
                      inner: reqBody.x25x.sections.inner,
                      topOuter: reqBody.x25x.sections.topOuter,
                      rightOuter: reqBody.x25x.sections.rightOuter,
                      leftOuter: reqBody.x25x.sections.leftOuter
                    }
                  },
                  x26x: {
                    sections: {
                      bottomOuter: reqBody.x26x.sections.bottomOuter,
                      inner: reqBody.x26x.sections.inner,
                      topOuter: reqBody.x26x.sections.topOuter,
                      rightOuter: reqBody.x26x.sections.rightOuter,
                      leftOuter: reqBody.x26x.sections.leftOuter
                    }
                  },
                  x27x: {
                    sections: {
                      bottomOuter: reqBody.x27x.sections.bottomOuter,
                      inner: reqBody.x27x.sections.inner,
                      topOuter: reqBody.x27x.sections.topOuter,
                      rightOuter: reqBody.x27x.sections.rightOuter,
                      leftOuter: reqBody.x27x.sections.leftOuter
                    }
                  },
                  x28x: {
                    sections: {
                      bottomOuter: reqBody.x28x.sections.bottomOuter,
                      inner: reqBody.x28x.sections.inner,
                      topOuter: reqBody.x28x.sections.topOuter,
                      rightOuter: reqBody.x28x.sections.rightOuter,
                      leftOuter: reqBody.x28x.sections.leftOuter
                    }
                  },
                  x41x: {
                    sections: {
                      bottomOuter: reqBody.x41x.sections.bottomOuter,
                      inner: reqBody.x41x.sections.inner,
                      topOuter: reqBody.x41x.sections.topOuter,
                      rightOuter: reqBody.x41x.sections.rightOuter,
                      leftOuter: reqBody.x41x.sections.leftOuter
                    }
                  },
                  x42x: {
                    sections: {
                      bottomOuter: reqBody.x42x.sections.bottomOuter,
                      inner: reqBody.x42x.sections.inner,
                      topOuter: reqBody.x42x.sections.topOuter,
                      rightOuter: reqBody.x42x.sections.rightOuter,
                      leftOuter: reqBody.x42x.sections.leftOuter
                    }
                  },
                  x43x: {
                    sections: {
                      bottomOuter: reqBody.x43x.sections.bottomOuter,
                      inner: reqBody.x43x.sections.inner,
                      topOuter: reqBody.x43x.sections.topOuter,
                      rightOuter: reqBody.x43x.sections.rightOuter,
                      leftOuter: reqBody.x43x.sections.leftOuter
                    }
                  },
                  x44x: {
                    sections: {
                      bottomOuter: reqBody.x44x.sections.bottomOuter,
                      inner: reqBody.x44x.sections.inner,
                      topOuter: reqBody.x44x.sections.topOuter,
                      rightOuter: reqBody.x44x.sections.rightOuter,
                      leftOuter: reqBody.x44x.sections.leftOuter
                    }
                  },
                  x45x: {
                    sections: {
                      bottomOuter: reqBody.x45x.sections.bottomOuter,
                      inner: reqBody.x45x.sections.inner,
                      topOuter: reqBody.x45x.sections.topOuter,
                      rightOuter: reqBody.x45x.sections.rightOuter,
                      leftOuter: reqBody.x45x.sections.leftOuter
                    }
                  },
                  x46x: {
                    sections: {
                      bottomOuter: reqBody.x46x.sections.bottomOuter,
                      inner: reqBody.x46x.sections.inner,
                      topOuter: reqBody.x46x.sections.topOuter,
                      rightOuter: reqBody.x46x.sections.rightOuter,
                      leftOuter: reqBody.x46x.sections.leftOuter
                    }
                  },
                  x47x: {
                    sections: {
                      bottomOuter: reqBody.x47x.sections.bottomOuter,
                      inner: reqBody.x47x.sections.inner,
                      topOuter: reqBody.x47x.sections.topOuter,
                      rightOuter: reqBody.x47x.sections.rightOuter,
                      leftOuter: reqBody.x47x.sections.leftOuter
                    }
                  },
                  x48x: {
                    sections: {
                      bottomOuter: reqBody.x48x.sections.bottomOuter,
                      inner: reqBody.x48x.sections.inner,
                      topOuter: reqBody.x48x.sections.topOuter,
                      rightOuter: reqBody.x48x.sections.rightOuter,
                      leftOuter: reqBody.x48x.sections.leftOuter
                    }
                  },

                  x51x: {
                    sections: {
                      bottomOuter: reqBody.x51x.sections.bottomOuter,
                      inner: reqBody.x51x.sections.inner,
                      topOuter: reqBody.x51x.sections.topOuter,
                      rightOuter: reqBody.x51x.sections.rightOuter,
                      leftOuter: reqBody.x51x.sections.leftOuter
                    }
                  },
                  x52x: {
                    sections: {
                      bottomOuter: reqBody.x52x.sections.bottomOuter,
                      inner: reqBody.x52x.sections.inner,
                      topOuter: reqBody.x52x.sections.topOuter,
                      rightOuter: reqBody.x52x.sections.rightOuter,
                      leftOuter: reqBody.x52x.sections.leftOuter
                    }
                  },
                  x53x: {
                    sections: {
                      bottomOuter: reqBody.x53x.sections.bottomOuter,
                      inner: reqBody.x53x.sections.inner,
                      topOuter: reqBody.x53x.sections.topOuter,
                      rightOuter: reqBody.x53x.sections.rightOuter,
                      leftOuter: reqBody.x53x.sections.leftOuter
                    }
                  },
                  x54x: {
                    sections: {
                      bottomOuter: reqBody.x54x.sections.bottomOuter,
                      inner: reqBody.x54x.sections.inner,
                      topOuter: reqBody.x54x.sections.topOuter,
                      rightOuter: reqBody.x54x.sections.rightOuter,
                      leftOuter: reqBody.x54x.sections.leftOuter
                    }
                  },
                  x55x: {
                    sections: {
                      bottomOuter: reqBody.x55x.sections.bottomOuter,
                      inner: reqBody.x55x.sections.inner,
                      topOuter: reqBody.x55x.sections.topOuter,
                      rightOuter: reqBody.x55x.sections.rightOuter,
                      leftOuter: reqBody.x55x.sections.leftOuter
                    }
                  },
                  x61x: {
                    sections: {
                      bottomOuter: reqBody.x61x.sections.bottomOuter,
                      inner: reqBody.x61x.sections.inner,
                      topOuter: reqBody.x61x.sections.topOuter,
                      rightOuter: reqBody.x61x.sections.rightOuter,
                      leftOuter: reqBody.x61x.sections.leftOuter
                    }
                  },
                  x62x: {
                    sections: {
                      bottomOuter: reqBody.x62x.sections.bottomOuter,
                      inner: reqBody.x62x.sections.inner,
                      topOuter: reqBody.x62x.sections.topOuter,
                      rightOuter: reqBody.x62x.sections.rightOuter,
                      leftOuter: reqBody.x62x.sections.leftOuter
                    }
                  },
                  x63x: {
                    sections: {
                      bottomOuter: reqBody.x63x.sections.bottomOuter,
                      inner: reqBody.x63x.sections.inner,
                      topOuter: reqBody.x63x.sections.topOuter,
                      rightOuter: reqBody.x63x.sections.rightOuter,
                      leftOuter: reqBody.x63x.sections.leftOuter
                    }
                  },
                  x64x: {
                    sections: {
                      bottomOuter: reqBody.x64x.sections.bottomOuter,
                      inner: reqBody.x64x.sections.inner,
                      topOuter: reqBody.x64x.sections.topOuter,
                      rightOuter: reqBody.x64x.sections.rightOuter,
                      leftOuter: reqBody.x64x.sections.leftOuter
                    }
                  },
                  x65x: {
                    sections: {
                      bottomOuter: reqBody.x65x.sections.bottomOuter,
                      inner: reqBody.x65x.sections.inner,
                      topOuter: reqBody.x65x.sections.topOuter,
                      rightOuter: reqBody.x65x.sections.rightOuter,
                      leftOuter: reqBody.x65x.sections.leftOuter
                    }
                  },
                  x71x: {
                    sections: {
                      bottomOuter: reqBody.x71x.sections.bottomOuter,
                      inner: reqBody.x71x.sections.inner,
                      topOuter: reqBody.x71x.sections.topOuter,
                      rightOuter: reqBody.x71x.sections.rightOuter,
                      leftOuter: reqBody.x71x.sections.leftOuter
                    }
                  },
                  x72x: {
                    sections: {
                      bottomOuter: reqBody.x72x.sections.bottomOuter,
                      inner: reqBody.x72x.sections.inner,
                      topOuter: reqBody.x72x.sections.topOuter,
                      rightOuter: reqBody.x72x.sections.rightOuter,
                      leftOuter: reqBody.x72x.sections.leftOuter
                    }
                  },
                  x73x: {
                    sections: {
                      bottomOuter: reqBody.x73x.sections.bottomOuter,
                      inner: reqBody.x73x.sections.inner,
                      topOuter: reqBody.x73x.sections.topOuter,
                      rightOuter: reqBody.x73x.sections.rightOuter,
                      leftOuter: reqBody.x73x.sections.leftOuter
                    }
                  },
                  x74x: {
                    sections: {
                      bottomOuter: reqBody.x74x.sections.bottomOuter,
                      inner: reqBody.x74x.sections.inner,
                      topOuter: reqBody.x74x.sections.topOuter,
                      rightOuter: reqBody.x74x.sections.rightOuter,
                      leftOuter: reqBody.x74x.sections.leftOuter
                    }
                  },
                  x75x: {
                    sections: {
                      bottomOuter: reqBody.x75x.sections.bottomOuter,
                      inner: reqBody.x75x.sections.inner,
                      topOuter: reqBody.x75x.sections.topOuter,
                      rightOuter: reqBody.x75x.sections.rightOuter,
                      leftOuter: reqBody.x75x.sections.leftOuter
                    }
                  },
                  x81x: {
                    sections: {
                      bottomOuter: reqBody.x81x.sections.bottomOuter,
                      inner: reqBody.x81x.sections.inner,
                      topOuter: reqBody.x81x.sections.topOuter,
                      rightOuter: reqBody.x81x.sections.rightOuter,
                      leftOuter: reqBody.x81x.sections.leftOuter
                    }
                  },
                  x82x: {
                    sections: {
                      bottomOuter: reqBody.x82x.sections.bottomOuter,
                      inner: reqBody.x82x.sections.inner,
                      topOuter: reqBody.x82x.sections.topOuter,
                      rightOuter: reqBody.x82x.sections.rightOuter,
                      leftOuter: reqBody.x82x.sections.leftOuter
                    }
                  },
                  x83x: {
                    sections: {
                      bottomOuter: reqBody.x83x.sections.bottomOuter,
                      inner: reqBody.x83x.sections.inner,
                      topOuter: reqBody.x83x.sections.topOuter,
                      rightOuter: reqBody.x83x.sections.rightOuter,
                      leftOuter: reqBody.x83x.sections.leftOuter
                    }
                  },
                  x84x: {
                    sections: {
                      bottomOuter: reqBody.x84x.sections.bottomOuter,
                      inner: reqBody.x84x.sections.inner,
                      topOuter: reqBody.x84x.sections.topOuter,
                      rightOuter: reqBody.x84x.sections.rightOuter,
                      leftOuter: reqBody.x84x.sections.leftOuter
                    }
                  },
                  x85x: {
                    sections: {
                      bottomOuter: reqBody.x85x.sections.bottomOuter,
                      inner: reqBody.x85x.sections.inner,
                      topOuter: reqBody.x85x.sections.topOuter,
                      rightOuter: reqBody.x85x.sections.rightOuter,
                      leftOuter: reqBody.x85x.sections.leftOuter
                    }
                  },

                    gingivitis: reqBody.gingivitis,
                    early: reqBody.early,
                    moderate: reqBody.moderate,
                    advance: reqBody.advance,
                    class: reqBody.class,
                    overjet: reqBody.overjet,
                    overbite: reqBody.overbite,
                    midline: reqBody.midline,
                    crossbite: reqBody.crossbite,
                    orthodontic: reqBody.orthodontic,
                    stayplate: reqBody.stayplate,
                    others: reqBody.others,
                    ifothers: reqBody.ifothers,
                    clenching: reqBody.clenching,
                    clicking: reqBody.clicking,
                    trismus: reqBody.trismus,
                    muscleSpasm: reqBody.muscleSpasm                     
    
            })
    
            return newRecord.save().then((record, error) => {
                if (error) {
                    return false;
    
                } else{
                    return true;
                }
            })
        }

        module.exports.updateRecord = (recordID, reqBody) => {
        
                    let updatedRecord = {
                        
                        x18x: {
                            sections: {
                              bottomOuter: reqBody.x18x.sections.bottomOuter,
                              inner: reqBody.x18x.sections.inner,
                              topOuter: reqBody.x18x.sections.topOuter,
                              rightOuter: reqBody.x18x.sections.rightOuter,
                              leftOuter: reqBody.x18x.sections.leftOuter
                            }
                          },
                          x17x: {
                            sections: {
                              bottomOuter: reqBody.x17x.sections.bottomOuter,
                              inner: reqBody.x17x.sections.inner,
                              topOuter: reqBody.x17x.sections.topOuter,
                              rightOuter: reqBody.x17x.sections.rightOuter,
                              leftOuter: reqBody.x17x.sections.leftOuter
                            }
                          },
                          x16x: {
                            sections: {
                              bottomOuter: reqBody.x16x.sections.bottomOuter,
                              inner: reqBody.x16x.sections.inner,
                              topOuter: reqBody.x16x.sections.topOuter,
                              rightOuter: reqBody.x16x.sections.rightOuter,
                              leftOuter: reqBody.x16x.sections.leftOuter
                            }
                          },
                          x15x: {
                            sections: {
                              bottomOuter: reqBody.x15x.sections.bottomOuter,
                              inner: reqBody.x15x.sections.inner,
                              topOuter: reqBody.x15x.sections.topOuter,
                              rightOuter: reqBody.x15x.sections.rightOuter,
                              leftOuter: reqBody.x15x.sections.leftOuter
                            }
                          },
                          x14x: {
                            sections: {
                              bottomOuter: reqBody.x14x.sections.bottomOuter,
                              inner: reqBody.x14x.sections.inner,
                              topOuter: reqBody.x14x.sections.topOuter,
                              rightOuter: reqBody.x14x.sections.rightOuter,
                              leftOuter: reqBody.x14x.sections.leftOuter
                            }
                          },
                          x13x: {
                            sections: {
                              bottomOuter: reqBody.x13x.sections.bottomOuter,
                              inner: reqBody.x13x.sections.inner,
                              topOuter: reqBody.x13x.sections.topOuter,
                              rightOuter: reqBody.x13x.sections.rightOuter,
                              leftOuter: reqBody.x13x.sections.leftOuter
                            }
                          },
                          x12x: {
                            sections: {
                              bottomOuter: reqBody.x12x.sections.bottomOuter,
                              inner: reqBody.x12x.sections.inner,
                              topOuter: reqBody.x12x.sections.topOuter,
                              rightOuter: reqBody.x12x.sections.rightOuter,
                              leftOuter: reqBody.x12x.sections.leftOuter
                            }
                          },
                          x11x: {
                            sections: {
                              bottomOuter: reqBody.x11x.sections.bottomOuter,
                              inner: reqBody.x11x.sections.inner,
                              topOuter: reqBody.x11x.sections.topOuter,
                              rightOuter: reqBody.x11x.sections.rightOuter,
                              leftOuter: reqBody.x11x.sections.leftOuter
                            }
                          },
                          x21x: {
                            sections: {
                              bottomOuter: reqBody.x21x.sections.bottomOuter,
                              inner: reqBody.x21x.sections.inner,
                              topOuter: reqBody.x21x.sections.topOuter,
                              rightOuter: reqBody.x21x.sections.rightOuter,
                              leftOuter: reqBody.x21x.sections.leftOuter
                            }
                          },
                          x22x: {
                            sections: {
                              bottomOuter: reqBody.x22x.sections.bottomOuter,
                              inner: reqBody.x22x.sections.inner,
                              topOuter: reqBody.x22x.sections.topOuter,
                              rightOuter: reqBody.x22x.sections.rightOuter,
                              leftOuter: reqBody.x22x.sections.leftOuter
                            }
                          },
                          x23x: {
                            sections: {
                              bottomOuter: reqBody.x23x.sections.bottomOuter,
                              inner: reqBody.x23x.sections.inner,
                              topOuter: reqBody.x23x.sections.topOuter,
                              rightOuter: reqBody.x23x.sections.rightOuter,
                              leftOuter: reqBody.x23x.sections.leftOuter
                            }
                          },
                          x24x: {
                            sections: {
                              bottomOuter: reqBody.x24x.sections.bottomOuter,
                              inner: reqBody.x24x.sections.inner,
                              topOuter: reqBody.x24x.sections.topOuter,
                              rightOuter: reqBody.x24x.sections.rightOuter,
                              leftOuter: reqBody.x24x.sections.leftOuter
                            }
                          },
                          x25x: {
                            sections: {
                              bottomOuter: reqBody.x25x.sections.bottomOuter,
                              inner: reqBody.x25x.sections.inner,
                              topOuter: reqBody.x25x.sections.topOuter,
                              rightOuter: reqBody.x25x.sections.rightOuter,
                              leftOuter: reqBody.x25x.sections.leftOuter
                            }
                          },
                          x26x: {
                            sections: {
                              bottomOuter: reqBody.x26x.sections.bottomOuter,
                              inner: reqBody.x26x.sections.inner,
                              topOuter: reqBody.x26x.sections.topOuter,
                              rightOuter: reqBody.x26x.sections.rightOuter,
                              leftOuter: reqBody.x26x.sections.leftOuter
                            }
                          },
                          x27x: {
                            sections: {
                              bottomOuter: reqBody.x27x.sections.bottomOuter,
                              inner: reqBody.x27x.sections.inner,
                              topOuter: reqBody.x27x.sections.topOuter,
                              rightOuter: reqBody.x27x.sections.rightOuter,
                              leftOuter: reqBody.x27x.sections.leftOuter
                            }
                          },
                          x28x: {
                            sections: {
                              bottomOuter: reqBody.x28x.sections.bottomOuter,
                              inner: reqBody.x28x.sections.inner,
                              topOuter: reqBody.x28x.sections.topOuter,
                              rightOuter: reqBody.x28x.sections.rightOuter,
                              leftOuter: reqBody.x28x.sections.leftOuter
                            }
                          },
                          x41x: {
                            sections: {
                              bottomOuter: reqBody.x41x.sections.bottomOuter,
                              inner: reqBody.x41x.sections.inner,
                              topOuter: reqBody.x41x.sections.topOuter,
                              rightOuter: reqBody.x41x.sections.rightOuter,
                              leftOuter: reqBody.x41x.sections.leftOuter
                            }
                          },
                          x42x: {
                            sections: {
                              bottomOuter: reqBody.x42x.sections.bottomOuter,
                              inner: reqBody.x42x.sections.inner,
                              topOuter: reqBody.x42x.sections.topOuter,
                              rightOuter: reqBody.x42x.sections.rightOuter,
                              leftOuter: reqBody.x42x.sections.leftOuter
                            }
                          },
                          x43x: {
                            sections: {
                              bottomOuter: reqBody.x43x.sections.bottomOuter,
                              inner: reqBody.x43x.sections.inner,
                              topOuter: reqBody.x43x.sections.topOuter,
                              rightOuter: reqBody.x43x.sections.rightOuter,
                              leftOuter: reqBody.x43x.sections.leftOuter
                            }
                          },
                          x44x: {
                            sections: {
                              bottomOuter: reqBody.x44x.sections.bottomOuter,
                              inner: reqBody.x44x.sections.inner,
                              topOuter: reqBody.x44x.sections.topOuter,
                              rightOuter: reqBody.x44x.sections.rightOuter,
                              leftOuter: reqBody.x44x.sections.leftOuter
                            }
                          },
                          x45x: {
                            sections: {
                              bottomOuter: reqBody.x45x.sections.bottomOuter,
                              inner: reqBody.x45x.sections.inner,
                              topOuter: reqBody.x45x.sections.topOuter,
                              rightOuter: reqBody.x45x.sections.rightOuter,
                              leftOuter: reqBody.x45x.sections.leftOuter
                            }
                          },
                          x46x: {
                            sections: {
                              bottomOuter: reqBody.x46x.sections.bottomOuter,
                              inner: reqBody.x46x.sections.inner,
                              topOuter: reqBody.x46x.sections.topOuter,
                              rightOuter: reqBody.x46x.sections.rightOuter,
                              leftOuter: reqBody.x46x.sections.leftOuter
                            }
                          },
                          x47x: {
                            sections: {
                              bottomOuter: reqBody.x47x.sections.bottomOuter,
                              inner: reqBody.x47x.sections.inner,
                              topOuter: reqBody.x47x.sections.topOuter,
                              rightOuter: reqBody.x47x.sections.rightOuter,
                              leftOuter: reqBody.x47x.sections.leftOuter
                            }
                          },
                          x48x: {
                            sections: {
                              bottomOuter: reqBody.x48x.sections.bottomOuter,
                              inner: reqBody.x48x.sections.inner,
                              topOuter: reqBody.x48x.sections.topOuter,
                              rightOuter: reqBody.x48x.sections.rightOuter,
                              leftOuter: reqBody.x48x.sections.leftOuter
                            }
                          },
        
                          x51x: {
                            sections: {
                              bottomOuter: reqBody.x51x.sections.bottomOuter,
                              inner: reqBody.x51x.sections.inner,
                              topOuter: reqBody.x51x.sections.topOuter,
                              rightOuter: reqBody.x51x.sections.rightOuter,
                              leftOuter: reqBody.x51x.sections.leftOuter
                            }
                          },
                          x52x: {
                            sections: {
                              bottomOuter: reqBody.x52x.sections.bottomOuter,
                              inner: reqBody.x52x.sections.inner,
                              topOuter: reqBody.x52x.sections.topOuter,
                              rightOuter: reqBody.x52x.sections.rightOuter,
                              leftOuter: reqBody.x52x.sections.leftOuter
                            }
                          },
                          x53x: {
                            sections: {
                              bottomOuter: reqBody.x53x.sections.bottomOuter,
                              inner: reqBody.x53x.sections.inner,
                              topOuter: reqBody.x53x.sections.topOuter,
                              rightOuter: reqBody.x53x.sections.rightOuter,
                              leftOuter: reqBody.x53x.sections.leftOuter
                            }
                          },
                          x54x: {
                            sections: {
                              bottomOuter: reqBody.x54x.sections.bottomOuter,
                              inner: reqBody.x54x.sections.inner,
                              topOuter: reqBody.x54x.sections.topOuter,
                              rightOuter: reqBody.x54x.sections.rightOuter,
                              leftOuter: reqBody.x54x.sections.leftOuter
                            }
                          },
                          x55x: {
                            sections: {
                              bottomOuter: reqBody.x55x.sections.bottomOuter,
                              inner: reqBody.x55x.sections.inner,
                              topOuter: reqBody.x55x.sections.topOuter,
                              rightOuter: reqBody.x55x.sections.rightOuter,
                              leftOuter: reqBody.x55x.sections.leftOuter
                            }
                          },
                          x61x: {
                            sections: {
                              bottomOuter: reqBody.x61x.sections.bottomOuter,
                              inner: reqBody.x61x.sections.inner,
                              topOuter: reqBody.x61x.sections.topOuter,
                              rightOuter: reqBody.x61x.sections.rightOuter,
                              leftOuter: reqBody.x61x.sections.leftOuter
                            }
                          },
                          x62x: {
                            sections: {
                              bottomOuter: reqBody.x62x.sections.bottomOuter,
                              inner: reqBody.x62x.sections.inner,
                              topOuter: reqBody.x62x.sections.topOuter,
                              rightOuter: reqBody.x62x.sections.rightOuter,
                              leftOuter: reqBody.x62x.sections.leftOuter
                            }
                          },
                          x63x: {
                            sections: {
                              bottomOuter: reqBody.x63x.sections.bottomOuter,
                              inner: reqBody.x63x.sections.inner,
                              topOuter: reqBody.x63x.sections.topOuter,
                              rightOuter: reqBody.x63x.sections.rightOuter,
                              leftOuter: reqBody.x63x.sections.leftOuter
                            }
                          },
                          x64x: {
                            sections: {
                              bottomOuter: reqBody.x64x.sections.bottomOuter,
                              inner: reqBody.x64x.sections.inner,
                              topOuter: reqBody.x64x.sections.topOuter,
                              rightOuter: reqBody.x64x.sections.rightOuter,
                              leftOuter: reqBody.x64x.sections.leftOuter
                            }
                          },
                          x65x: {
                            sections: {
                              bottomOuter: reqBody.x65x.sections.bottomOuter,
                              inner: reqBody.x65x.sections.inner,
                              topOuter: reqBody.x65x.sections.topOuter,
                              rightOuter: reqBody.x65x.sections.rightOuter,
                              leftOuter: reqBody.x65x.sections.leftOuter
                            }
                          },
                          x71x: {
                            sections: {
                              bottomOuter: reqBody.x71x.sections.bottomOuter,
                              inner: reqBody.x71x.sections.inner,
                              topOuter: reqBody.x71x.sections.topOuter,
                              rightOuter: reqBody.x71x.sections.rightOuter,
                              leftOuter: reqBody.x71x.sections.leftOuter
                            }
                          },
                          x72x: {
                            sections: {
                              bottomOuter: reqBody.x72x.sections.bottomOuter,
                              inner: reqBody.x72x.sections.inner,
                              topOuter: reqBody.x72x.sections.topOuter,
                              rightOuter: reqBody.x72x.sections.rightOuter,
                              leftOuter: reqBody.x72x.sections.leftOuter
                            }
                          },
                          x73x: {
                            sections: {
                              bottomOuter: reqBody.x73x.sections.bottomOuter,
                              inner: reqBody.x73x.sections.inner,
                              topOuter: reqBody.x73x.sections.topOuter,
                              rightOuter: reqBody.x73x.sections.rightOuter,
                              leftOuter: reqBody.x73x.sections.leftOuter
                            }
                          },
                          x74x: {
                            sections: {
                              bottomOuter: reqBody.x74x.sections.bottomOuter,
                              inner: reqBody.x74x.sections.inner,
                              topOuter: reqBody.x74x.sections.topOuter,
                              rightOuter: reqBody.x74x.sections.rightOuter,
                              leftOuter: reqBody.x74x.sections.leftOuter
                            }
                          },
                          x75x: {
                            sections: {
                              bottomOuter: reqBody.x75x.sections.bottomOuter,
                              inner: reqBody.x75x.sections.inner,
                              topOuter: reqBody.x75x.sections.topOuter,
                              rightOuter: reqBody.x75x.sections.rightOuter,
                              leftOuter: reqBody.x75x.sections.leftOuter
                            }
                          },
                          x81x: {
                            sections: {
                              bottomOuter: reqBody.x81x.sections.bottomOuter,
                              inner: reqBody.x81x.sections.inner,
                              topOuter: reqBody.x81x.sections.topOuter,
                              rightOuter: reqBody.x81x.sections.rightOuter,
                              leftOuter: reqBody.x81x.sections.leftOuter
                            }
                          },
                          x82x: {
                            sections: {
                              bottomOuter: reqBody.x82x.sections.bottomOuter,
                              inner: reqBody.x82x.sections.inner,
                              topOuter: reqBody.x82x.sections.topOuter,
                              rightOuter: reqBody.x82x.sections.rightOuter,
                              leftOuter: reqBody.x82x.sections.leftOuter
                            }
                          },
                          x83x: {
                            sections: {
                              bottomOuter: reqBody.x83x.sections.bottomOuter,
                              inner: reqBody.x83x.sections.inner,
                              topOuter: reqBody.x83x.sections.topOuter,
                              rightOuter: reqBody.x83x.sections.rightOuter,
                              leftOuter: reqBody.x83x.sections.leftOuter
                            }
                          },
                          x84x: {
                            sections: {
                              bottomOuter: reqBody.x84x.sections.bottomOuter,
                              inner: reqBody.x84x.sections.inner,
                              topOuter: reqBody.x84x.sections.topOuter,
                              rightOuter: reqBody.x84x.sections.rightOuter,
                              leftOuter: reqBody.x84x.sections.leftOuter
                            }
                          },
                          x85x: {
                            sections: {
                              bottomOuter: reqBody.x85x.sections.bottomOuter,
                              inner: reqBody.x85x.sections.inner,
                              topOuter: reqBody.x85x.sections.topOuter,
                              rightOuter: reqBody.x85x.sections.rightOuter,
                              leftOuter: reqBody.x85x.sections.leftOuter
                            }
                          },
        
                            gingivitis: reqBody.gingivitis,
                            early: reqBody.early,
                            moderate: reqBody.moderate,
                            advance: reqBody.advance,
                            class: reqBody.class,
                            overjet: reqBody.overjet,
                            overbite: reqBody.overbite,
                            midline: reqBody.midline,
                            crossbite: reqBody.crossbite,
                            orthodontic: reqBody.orthodontic,
                            stayplate: reqBody.stayplate,
                            others: reqBody.others,
                            ifothers: reqBody.ifothers,
                            clenching: reqBody.clenching,
                            clicking: reqBody.clicking,
                            trismus: reqBody.trismus,
                            muscleSpasm: reqBody.muscleSpasm 
                
                    }
                
                    return DentalRecord.findByIdAndUpdate(recordID, updatedRecord).then((record, error) => {
                        if (error) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                
                }

