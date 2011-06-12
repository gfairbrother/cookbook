class Recipe < ActiveRecord::Base
  self.include_root_in_json = false

  validates_presence_of :name, :description
end
