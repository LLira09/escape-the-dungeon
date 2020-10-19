class CreateNpcs < ActiveRecord::Migration[6.0]
  def change
    create_table :npcs do |t|
      t.string :name
      t.integer :hp
      t.integer :strength
      t.integer :speed
      t.integer :mind

      t.timestamps
    end
  end
end
