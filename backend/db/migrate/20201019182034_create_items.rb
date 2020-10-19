class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :item_type
      t.integer :effect

      t.timestamps
    end
  end
end
