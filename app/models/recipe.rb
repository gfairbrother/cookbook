class Recipe < ActiveRecord::Base
  self.include_root_in_json = false

  validates_presence_of :name, :description
  validates_uniqueness_of :name

  def created_at
    read_attribute(:created_at).to_time.to_i * 1000
  end

  def updated_at
    read_attribute(:updated_at).to_time.to_i * 1000
  end

end
