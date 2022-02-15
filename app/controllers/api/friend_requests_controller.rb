class Api::FriendRequestsController < ApplicationController

  before_action :underscore_params!

  def index 
    @friend_requests = FriendRequest.where(friend_id: params[:user_id])
    render :index
  end

  def create 
    @friend_request = FriendRequest.new(friend_request_params)
    if @friend_requests.save 
      render :show
    else  
      render json: ['Friend Request unsuccessful'], status: 400 
    end
  end

  def destroy 
    @friend_request = FriendRequest.find_by(id: params[:id])
    @friend_request.destroy
  end

  private 

  def friend_request_params 
    params.require(:friend_request).permit(:user_id, :friend_id)
  end

end