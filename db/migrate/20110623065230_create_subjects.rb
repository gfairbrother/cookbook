class CreateSubjects < ActiveRecord::Migration
  def self.up
    create_table :subjects do |t|
      t.string :name
      t.integer :parent_id
      t.integer :lft
      t.integer :rgt
      t.integer :level
    end

    add_index :subjects, :parent_id
  end

  def self.down
    drop_table :subjects
  end
end
