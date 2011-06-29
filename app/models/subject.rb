class Subject < ActiveRecord::Base
  self.include_root_in_json = false

  acts_as_nested_set

#  before_save do
#    self.level = ancestors.count
#  end

end
