class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :hp
      t.integer :strength
      t.integer :speed
      t.integer :mind

      t.timestamps
    end
  end
end
