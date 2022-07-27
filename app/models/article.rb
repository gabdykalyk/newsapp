class Article < ApplicationRecord
  dragonfly_accessor :image
 
  #title validation
  validates_presence_of :title
 
  #image validations
  validates_presence_of :image
  validates_size_of :image, maximum: 500.kilobytes,
                    message: "should not be more than 500KB", if: :image_changed?
 
  validates_property :format, of: :image, in: ['jpeg', 'png'],
                      message: "the formats allowed are: .jpeg, .png", if: :image_changed?
end
