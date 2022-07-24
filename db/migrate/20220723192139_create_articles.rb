class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.string :image_uid
      t.boolean :visible, :default => true      

      t.timestamps
    end
  end
end
