class CreateSubjects < ActiveRecord::Migration
  def self.up
    create_table :subjects do |t|
      t.string :text
      t.boolean :hasChildren, :default => true

      t.timestamps
    end
  end

  def self.down
    drop_table :subjects
  end
end
